import { GroundStation } from "../GroundStation";
import { GroundStationClient } from "../GroundStationClient";
import {
  ListGroundStationsCommand,
  ListGroundStationsCommandInput,
  ListGroundStationsCommandOutput,
} from "../commands/ListGroundStationsCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListGroundStationsCommandInput,
  ...args: any
): Promise<ListGroundStationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroundStationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GroundStation,
  input: ListGroundStationsCommandInput,
  ...args: any
): Promise<ListGroundStationsCommandOutput> => {
  // @ts-ignore
  return await client.listGroundStations(input, ...args);
};
export async function* listGroundStationsPaginate(
  config: GroundStationPaginationConfiguration,
  input: ListGroundStationsCommandInput,
  ...additionalArguments: any
): Paginator<ListGroundStationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroundStationsCommandOutput;
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
