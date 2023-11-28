// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentKnowledgeBasesCommand,
  ListAgentKnowledgeBasesCommandInput,
  ListAgentKnowledgeBasesCommandOutput,
} from "../commands/ListAgentKnowledgeBasesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockAgentClient,
  input: ListAgentKnowledgeBasesCommandInput,
  ...args: any
): Promise<ListAgentKnowledgeBasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAgentKnowledgeBasesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAgentKnowledgeBases(
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentKnowledgeBasesCommandInput,
  ...additionalArguments: any
): Paginator<ListAgentKnowledgeBasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAgentKnowledgeBasesCommandOutput;
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
