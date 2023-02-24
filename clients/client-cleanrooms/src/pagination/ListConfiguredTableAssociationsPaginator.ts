// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CleanRooms } from "../CleanRooms";
import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
} from "../commands/ListConfiguredTableAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListConfiguredTableAssociationsCommandInput,
  ...args: any
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfiguredTableAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CleanRooms,
  input: ListConfiguredTableAssociationsCommandInput,
  ...args: any
): Promise<ListConfiguredTableAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listConfiguredTableAssociations(input, ...args);
};
export async function* paginateListConfiguredTableAssociations(
  config: CleanRoomsPaginationConfiguration,
  input: ListConfiguredTableAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfiguredTableAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfiguredTableAssociationsCommandOutput;
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
