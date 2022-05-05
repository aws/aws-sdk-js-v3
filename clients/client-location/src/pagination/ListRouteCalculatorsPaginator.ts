// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListRouteCalculatorsCommand,
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
} from "../commands/ListRouteCalculatorsCommand";
import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListRouteCalculatorsCommandInput,
  ...args: any
): Promise<ListRouteCalculatorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRouteCalculatorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Location,
  input: ListRouteCalculatorsCommandInput,
  ...args: any
): Promise<ListRouteCalculatorsCommandOutput> => {
  // @ts-ignore
  return await client.listRouteCalculators(input, ...args);
};
export async function* paginateListRouteCalculators(
  config: LocationPaginationConfiguration,
  input: ListRouteCalculatorsCommandInput,
  ...additionalArguments: any
): Paginator<ListRouteCalculatorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRouteCalculatorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Location) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LocationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Location | LocationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
