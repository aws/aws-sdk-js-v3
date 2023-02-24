// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CleanRooms } from "../CleanRooms";
import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "../commands/ListMembershipsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListMembershipsCommandInput,
  ...args: any
): Promise<ListMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMembershipsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CleanRooms,
  input: ListMembershipsCommandInput,
  ...args: any
): Promise<ListMembershipsCommandOutput> => {
  // @ts-ignore
  return await client.listMemberships(input, ...args);
};
export async function* paginateListMemberships(
  config: CleanRoomsPaginationConfiguration,
  input: ListMembershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListMembershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMembershipsCommandOutput;
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
