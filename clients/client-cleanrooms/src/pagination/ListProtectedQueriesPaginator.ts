// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListProtectedQueriesCommand,
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "../commands/ListProtectedQueriesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListProtectedQueriesCommandInput,
  ...args: any
): Promise<ListProtectedQueriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProtectedQueriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProtectedQueries(
  config: CleanRoomsPaginationConfiguration,
  input: ListProtectedQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListProtectedQueriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProtectedQueriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CleanRoomsClient) {
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
