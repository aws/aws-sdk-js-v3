// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssistantsCommand,
  ListAssistantsCommandInput,
  ListAssistantsCommandOutput,
} from "../commands/ListAssistantsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WisdomClient,
  input: ListAssistantsCommandInput,
  ...args: any
): Promise<ListAssistantsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssistantsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssistants(
  config: WisdomPaginationConfiguration,
  input: ListAssistantsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssistantsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssistantsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof WisdomClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Wisdom | WisdomClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
