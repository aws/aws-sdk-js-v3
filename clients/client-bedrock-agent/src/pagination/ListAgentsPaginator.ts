// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import { ListAgentsCommand, ListAgentsCommandInput, ListAgentsCommandOutput } from "../commands/ListAgentsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockAgentClient,
  input: ListAgentsCommandInput,
  ...args: any
): Promise<ListAgentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAgentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAgents(
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentsCommandInput,
  ...additionalArguments: any
): Paginator<ListAgentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAgentsCommandOutput;
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
