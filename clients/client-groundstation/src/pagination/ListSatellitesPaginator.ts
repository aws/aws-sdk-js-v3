// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSatellitesCommand,
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
} from "../commands/ListSatellitesCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListSatellitesCommandInput,
  ...args: any
): Promise<ListSatellitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSatellitesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSatellites(
  config: GroundStationPaginationConfiguration,
  input: ListSatellitesCommandInput,
  ...additionalArguments: any
): Paginator<ListSatellitesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSatellitesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof GroundStationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GroundStation | GroundStationClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
