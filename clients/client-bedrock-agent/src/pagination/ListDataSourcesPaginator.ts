// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockAgentClient,
  input: ListDataSourcesCommandInput,
  ...args: any
): Promise<ListDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataSources(
  config: BedrockAgentPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof BedrockAgentClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected BedrockAgent | BedrockAgentClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
