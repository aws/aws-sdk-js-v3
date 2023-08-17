// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssistantAssociationsCommand,
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "../commands/ListAssistantAssociationsCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WisdomClient,
  input: ListAssistantAssociationsCommandInput,
  ...args: any
): Promise<ListAssistantAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssistantAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssistantAssociations(
  config: WisdomPaginationConfiguration,
  input: ListAssistantAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssistantAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssistantAssociationsCommandOutput;
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
