// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentAliasesCommand,
  ListAgentAliasesCommandInput,
  ListAgentAliasesCommandOutput,
} from "../commands/ListAgentAliasesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockAgentClient,
  input: ListAgentAliasesCommandInput,
  ...args: any
): Promise<ListAgentAliasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAgentAliasesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAgentAliases(
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentAliasesCommandInput,
  ...additionalArguments: any
): Paginator<ListAgentAliasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAgentAliasesCommandOutput;
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
