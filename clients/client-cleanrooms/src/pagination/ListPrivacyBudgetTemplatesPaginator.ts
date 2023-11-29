// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListPrivacyBudgetTemplatesCommand,
  ListPrivacyBudgetTemplatesCommandInput,
  ListPrivacyBudgetTemplatesCommandOutput,
} from "../commands/ListPrivacyBudgetTemplatesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListPrivacyBudgetTemplatesCommandInput,
  ...args: any
): Promise<ListPrivacyBudgetTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPrivacyBudgetTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPrivacyBudgetTemplates(
  config: CleanRoomsPaginationConfiguration,
  input: ListPrivacyBudgetTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListPrivacyBudgetTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPrivacyBudgetTemplatesCommandOutput;
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
