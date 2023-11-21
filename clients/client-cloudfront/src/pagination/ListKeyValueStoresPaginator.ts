// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFrontClient } from "../CloudFrontClient";
import {
  ListKeyValueStoresCommand,
  ListKeyValueStoresCommandInput,
  ListKeyValueStoresCommandOutput,
} from "../commands/ListKeyValueStoresCommand";
import { CloudFrontPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudFrontClient,
  input: ListKeyValueStoresCommandInput,
  ...args: any
): Promise<ListKeyValueStoresCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeyValueStoresCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKeyValueStores(
  config: CloudFrontPaginationConfiguration,
  input: ListKeyValueStoresCommandInput,
  ...additionalArguments: any
): Paginator<ListKeyValueStoresCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeyValueStoresCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof CloudFrontClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFront | CloudFrontClient");
    }
    yield page;
    const prevToken = token;
    token = page.KeyValueStoreList!.NextMarker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
