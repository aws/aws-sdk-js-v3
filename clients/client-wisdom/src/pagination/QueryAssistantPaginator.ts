// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "../commands/QueryAssistantCommand";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WisdomClient,
  input: QueryAssistantCommandInput,
  ...args: any
): Promise<QueryAssistantCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryAssistantCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateQueryAssistant(
  config: WisdomPaginationConfiguration,
  input: QueryAssistantCommandInput,
  ...additionalArguments: any
): Paginator<QueryAssistantCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryAssistantCommandOutput;
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
