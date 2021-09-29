import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import {
  ListTrackersCommand,
  ListTrackersCommandInput,
  ListTrackersCommandOutput,
} from "../commands/ListTrackersCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListTrackersCommandInput,
  ...args: any
): Promise<ListTrackersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrackersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Location,
  input: ListTrackersCommandInput,
  ...args: any
): Promise<ListTrackersCommandOutput> => {
  // @ts-ignore
  return await client.listTrackers(input, ...args);
};
export async function* paginateListTrackers(
  config: LocationPaginationConfiguration,
  input: ListTrackersCommandInput,
  ...additionalArguments: any
): Paginator<ListTrackersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrackersCommandOutput;
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
