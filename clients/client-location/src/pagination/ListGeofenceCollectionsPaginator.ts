import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import {
  ListGeofenceCollectionsCommand,
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "../commands/ListGeofenceCollectionsCommand";
import { LocationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListGeofenceCollectionsCommandInput,
  ...args: any
): Promise<ListGeofenceCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGeofenceCollectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Location,
  input: ListGeofenceCollectionsCommandInput,
  ...args: any
): Promise<ListGeofenceCollectionsCommandOutput> => {
  // @ts-ignore
  return await client.listGeofenceCollections(input, ...args);
};
export async function* paginateListGeofenceCollections(
  config: LocationPaginationConfiguration,
  input: ListGeofenceCollectionsCommandInput,
  ...additionalArguments: any
): Paginator<ListGeofenceCollectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGeofenceCollectionsCommandOutput;
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
