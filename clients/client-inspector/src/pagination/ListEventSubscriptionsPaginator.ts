// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEventSubscriptionsCommand,
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "../commands/ListEventSubscriptionsCommand";
import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListEventSubscriptionsCommandInput,
  ...args: any
): Promise<ListEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventSubscriptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: ListEventSubscriptionsCommandInput,
  ...args: any
): Promise<ListEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.listEventSubscriptions(input, ...args);
};
export async function* paginateListEventSubscriptions(
  config: InspectorPaginationConfiguration,
  input: ListEventSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventSubscriptionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
