// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSubscriptionTargetsCommand,
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "../commands/ListSubscriptionTargetsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DataZoneClient,
  input: ListSubscriptionTargetsCommandInput,
  ...args: any
): Promise<ListSubscriptionTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSubscriptionTargetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSubscriptionTargets(
  config: DataZonePaginationConfiguration,
  input: ListSubscriptionTargetsCommandInput,
  ...additionalArguments: any
): Paginator<ListSubscriptionTargetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSubscriptionTargetsCommandOutput;
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
