// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListPolicyGenerationsCommandInput,
  ...args: any
): Promise<ListPolicyGenerationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPolicyGenerationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPolicyGenerations(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListPolicyGenerationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPolicyGenerationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPolicyGenerationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AccessAnalyzerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AccessAnalyzer | AccessAnalyzerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
