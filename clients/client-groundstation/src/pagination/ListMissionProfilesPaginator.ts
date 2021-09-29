import { GroundStation } from "../GroundStation";
import { GroundStationClient } from "../GroundStationClient";
import {
  ListMissionProfilesCommand,
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
} from "../commands/ListMissionProfilesCommand";
import { GroundStationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListMissionProfilesCommandInput,
  ...args: any
): Promise<ListMissionProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMissionProfilesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GroundStation,
  input: ListMissionProfilesCommandInput,
  ...args: any
): Promise<ListMissionProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listMissionProfiles(input, ...args);
};
export async function* paginateListMissionProfiles(
  config: GroundStationPaginationConfiguration,
  input: ListMissionProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListMissionProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMissionProfilesCommandOutput;
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
