// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CleanRooms } from "../CleanRooms";
import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListConfiguredTablesCommand,
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput,
} from "../commands/ListConfiguredTablesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListConfiguredTablesCommandInput,
  ...args: any
): Promise<ListConfiguredTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfiguredTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CleanRooms,
  input: ListConfiguredTablesCommandInput,
  ...args: any
): Promise<ListConfiguredTablesCommandOutput> => {
  // @ts-ignore
  return await client.listConfiguredTables(input, ...args);
};
export async function* paginateListConfiguredTables(
  config: CleanRoomsPaginationConfiguration,
  input: ListConfiguredTablesCommandInput,
  ...additionalArguments: any
): Paginator<ListConfiguredTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfiguredTablesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CleanRooms) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CleanRoomsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CleanRooms | CleanRoomsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
