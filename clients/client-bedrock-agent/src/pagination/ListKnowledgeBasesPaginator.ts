// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListKnowledgeBasesCommand,
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "../commands/ListKnowledgeBasesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockAgentClient,
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
  config: BedrockAgentPaginationConfiguration,
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
