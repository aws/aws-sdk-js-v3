// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFrontKeyValueStoreClient } from "../CloudFrontKeyValueStoreClient";
import { ListKeysCommand, ListKeysCommandInput, ListKeysCommandOutput } from "../commands/ListKeysCommand";
import { CloudFrontKeyValueStorePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudFrontKeyValueStoreClient,
  input: ListKeysCommandInput,
  ...args: any
): Promise<ListKeysCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeysCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKeys(
  config: CloudFrontKeyValueStorePaginationConfiguration,
  input: ListKeysCommandInput,
  ...additionalArguments: any
): Paginator<ListKeysCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeysCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudFrontKeyValueStoreClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFrontKeyValueStore | CloudFrontKeyValueStoreClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
