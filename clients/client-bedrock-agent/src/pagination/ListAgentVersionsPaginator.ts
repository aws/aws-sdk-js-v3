// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentVersionsCommand,
  ListAgentVersionsCommandInput,
  ListAgentVersionsCommandOutput,
} from "../commands/ListAgentVersionsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockAgentClient,
  input: ListAgentVersionsCommandInput,
  ...args: any
): Promise<ListAgentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAgentVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAgentVersions(
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAgentVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAgentVersionsCommandOutput;
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
