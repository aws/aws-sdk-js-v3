// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import { RetrieveCommand, RetrieveCommandInput, RetrieveCommandOutput } from "../commands/RetrieveCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: BedrockAgentRuntimeClient,
  input: RetrieveCommandInput,
  ...args: any
): Promise<RetrieveCommandOutput> => {
  // @ts-ignore
  return await client.send(new RetrieveCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateRetrieve(
  config: BedrockAgentRuntimePaginationConfiguration,
  input: RetrieveCommandInput,
  ...additionalArguments: any
): Paginator<RetrieveCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: RetrieveCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof BedrockAgentRuntimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected BedrockAgentRuntime | BedrockAgentRuntimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
