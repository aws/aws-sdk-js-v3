// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSubscriptionsCommand,
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "../commands/ListSubscriptionsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DataZoneClient,
  input: ListSubscriptionsCommandInput,
  ...args: any
): Promise<ListSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscriptionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSubscriptions(
  config: DataZonePaginationConfiguration,
  input: ListSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscriptionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof DataZoneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataZone | DataZoneClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
