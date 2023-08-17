// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListMissionProfilesCommand,
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
} from "../commands/ListMissionProfilesCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
