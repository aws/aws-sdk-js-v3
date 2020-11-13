import { GroundStation } from "../GroundStation";
import { GroundStationClient } from "../GroundStationClient";
import {
  ListDataflowEndpointGroupsCommand,
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput,
} from "../commands/ListDataflowEndpointGroupsCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListDataflowEndpointGroupsCommandInput,
  ...args: any
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataflowEndpointGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: GroundStation,
  input: ListDataflowEndpointGroupsCommandInput,
  ...args: any
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listDataflowEndpointGroups(input, ...args);
};
export async function* listDataflowEndpointGroupsPaginate(
  config: GroundStationPaginationConfiguration,
  input: ListDataflowEndpointGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataflowEndpointGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataflowEndpointGroupsCommandOutput;
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
