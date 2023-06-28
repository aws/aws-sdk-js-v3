// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEphemeridesCommand,
  ListEphemeridesCommandInput,
  ListEphemeridesCommandOutput,
} from "../commands/ListEphemeridesCommand";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListEphemeridesCommandInput,
  ...args: any
): Promise<ListEphemeridesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEphemeridesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEphemerides(
  config: GroundStationPaginationConfiguration,
  input: ListEphemeridesCommandInput,
  ...additionalArguments: any
): Paginator<ListEphemeridesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEphemeridesCommandOutput;
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
