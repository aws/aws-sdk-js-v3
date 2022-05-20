// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRevisionAssetsCommand,
  ListRevisionAssetsCommandInput,
  ListRevisionAssetsCommandOutput,
} from "../commands/ListRevisionAssetsCommand";
import { DataExchange } from "../DataExchange";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataExchangeClient,
  input: ListRevisionAssetsCommandInput,
  ...args: any
): Promise<ListRevisionAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRevisionAssetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataExchange,
  input: ListRevisionAssetsCommandInput,
  ...args: any
): Promise<ListRevisionAssetsCommandOutput> => {
  // @ts-ignore
  return await client.listRevisionAssets(input, ...args);
};
export async function* paginateListRevisionAssets(
  config: DataExchangePaginationConfiguration,
  input: ListRevisionAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListRevisionAssetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRevisionAssetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataExchange) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataExchangeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataExchange | DataExchangeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
