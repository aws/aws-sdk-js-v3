import { GroundStation } from "../GroundStation";
import { GroundStationClient } from "../GroundStationClient";
import {
  ListSatellitesCommand,
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
} from "../commands/ListSatellitesCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: GroundStation,
  input: ListSatellitesCommandInput,
  ...args: any
): Promise<ListSatellitesCommandOutput> => {
  // @ts-ignore
  return await client.listSatellites(input, ...args);
};
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
    if (config.client instanceof GroundStation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GroundStationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GroundStation | GroundStationClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
