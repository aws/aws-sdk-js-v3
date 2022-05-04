// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "../commands/ListContactsCommand";
import { GroundStation } from "../GroundStation";
import { GroundStationClient } from "../GroundStationClient";
import { GroundStationPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GroundStationClient,
  input: ListContactsCommandInput,
  ...args: any
): Promise<ListContactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GroundStation,
  input: ListContactsCommandInput,
  ...args: any
): Promise<ListContactsCommandOutput> => {
  // @ts-ignore
  return await client.listContacts(input, ...args);
};
export async function* paginateListContacts(
  config: GroundStationPaginationConfiguration,
  input: ListContactsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactsCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
