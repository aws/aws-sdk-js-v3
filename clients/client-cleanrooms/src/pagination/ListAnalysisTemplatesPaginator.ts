// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListAnalysisTemplatesCommand,
  ListAnalysisTemplatesCommandInput,
  ListAnalysisTemplatesCommandOutput,
} from "../commands/ListAnalysisTemplatesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CleanRoomsClient,
  input: ListAnalysisTemplatesCommandInput,
  ...args: any
): Promise<ListAnalysisTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnalysisTemplatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnalysisTemplates(
  config: CleanRoomsPaginationConfiguration,
  input: ListAnalysisTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnalysisTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnalysisTemplatesCommandOutput;
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
