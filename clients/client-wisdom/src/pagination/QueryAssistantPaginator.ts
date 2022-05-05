// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  QueryAssistantCommand,
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
} from "../commands/QueryAssistantCommand";
import { Wisdom } from "../Wisdom";
import { WisdomClient } from "../WisdomClient";
import { WisdomPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Wisdom,
  input: QueryAssistantCommandInput,
  ...args: any
): Promise<QueryAssistantCommandOutput> => {
  // @ts-ignore
  return await client.queryAssistant(input, ...args);
};
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
    if (config.client instanceof Wisdom) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WisdomClient) {
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
