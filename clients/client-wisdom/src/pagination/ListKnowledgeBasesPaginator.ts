// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "../commands/ListKnowledgeBasesCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WisdomClient,
  input: ListKnowledgeBasesCommandInput,
  ...args: any
): Promise<ListKnowledgeBasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKnowledgeBasesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKnowledgeBases(
  config: WisdomPaginationConfiguration,
  input: ListKnowledgeBasesCommandInput,
  ...additionalArguments: any
): Paginator<ListKnowledgeBasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKnowledgeBasesCommandOutput;
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
