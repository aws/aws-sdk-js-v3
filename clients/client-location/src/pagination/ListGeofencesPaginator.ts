// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGeofencesCommand,
  ListGeofencesCommandInput,
  ListGeofencesCommandOutput,
} from "../commands/ListGeofencesCommand";
import { Location } from "../Location";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LocationClient,
  input: ListGeofencesCommandInput,
  ...args: any
): Promise<ListGeofencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGeofencesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Location,
  input: ListGeofencesCommandInput,
  ...args: any
): Promise<ListGeofencesCommandOutput> => {
  // @ts-ignore
  return await client.listGeofences(input, ...args);
};
export async function* paginateListGeofences(
  config: LocationPaginationConfiguration,
  input: ListGeofencesCommandInput,
  ...additionalArguments: any
): Paginator<ListGeofencesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGeofencesCommandOutput;
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
