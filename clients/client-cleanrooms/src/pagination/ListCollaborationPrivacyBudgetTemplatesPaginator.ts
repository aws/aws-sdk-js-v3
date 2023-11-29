// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationPrivacyBudgetTemplatesCommand,
  ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ListCollaborationPrivacyBudgetTemplatesCommandOutput,
} from "../commands/ListCollaborationPrivacyBudgetTemplatesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ...args: any
): Promise<ListCollaborationPrivacyBudgetTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCollaborationPrivacyBudgetTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCollaborationPrivacyBudgetTemplates(
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationPrivacyBudgetTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCollaborationPrivacyBudgetTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCollaborationPrivacyBudgetTemplatesCommandOutput;
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
