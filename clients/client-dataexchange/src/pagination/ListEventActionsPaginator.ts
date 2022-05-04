// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEventActionsCommand,
  ListEventActionsCommandInput,
  ListEventActionsCommandOutput,
} from "../commands/ListEventActionsCommand";
import { DataExchange } from "../DataExchange";
import { DataExchangeClient } from "../DataExchangeClient";
import { DataExchangePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DataExchangeClient,
  input: ListEventActionsCommandInput,
  ...args: any
): Promise<ListEventActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DataExchange,
  input: ListEventActionsCommandInput,
  ...args: any
): Promise<ListEventActionsCommandOutput> => {
  // @ts-ignore
  return await client.listEventActions(input, ...args);
};
export async function* paginateListEventActions(
  config: DataExchangePaginationConfiguration,
  input: ListEventActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventActionsCommandOutput;
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
