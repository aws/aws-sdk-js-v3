import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import {
  ListTrackerConsumersCommand,
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
} from "../commands/ListTrackerConsumersCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListTrackerConsumersCommandInput,
  ...args: any
): Promise<ListTrackerConsumersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrackerConsumersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Location,
  input: ListTrackerConsumersCommandInput,
  ...args: any
): Promise<ListTrackerConsumersCommandOutput> => {
  // @ts-ignore
  return await client.listTrackerConsumers(input, ...args);
};
export async function* paginateListTrackerConsumers(
  config: LocationPaginationConfiguration,
  input: ListTrackerConsumersCommandInput,
  ...additionalArguments: any
): Paginator<ListTrackerConsumersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrackerConsumersCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
