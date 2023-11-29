// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListConfiguredAudienceModelAssociationsCommand,
  ListConfiguredAudienceModelAssociationsCommandInput,
  ListConfiguredAudienceModelAssociationsCommandOutput,
} from "../commands/ListConfiguredAudienceModelAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListConfiguredAudienceModelAssociationsCommandInput,
  ...args: any
): Promise<ListConfiguredAudienceModelAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfiguredAudienceModelAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfiguredAudienceModelAssociations(
  config: CleanRoomsPaginationConfiguration,
  input: ListConfiguredAudienceModelAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfiguredAudienceModelAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfiguredAudienceModelAssociationsCommandOutput;
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
