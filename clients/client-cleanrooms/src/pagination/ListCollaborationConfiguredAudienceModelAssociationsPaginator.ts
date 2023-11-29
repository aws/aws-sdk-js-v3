// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationConfiguredAudienceModelAssociationsCommand,
  ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
} from "../commands/ListCollaborationConfiguredAudienceModelAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ...args: any
): Promise<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCollaborationConfiguredAudienceModelAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCollaborationConfiguredAudienceModelAssociations(
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCollaborationConfiguredAudienceModelAssociationsCommandOutput;
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
