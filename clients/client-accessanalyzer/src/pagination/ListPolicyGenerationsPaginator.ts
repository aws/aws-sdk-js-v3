// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { AccessAnalyzer } from "../AccessAnalyzer";
import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: AccessAnalyzer,
  input: ListPolicyGenerationsCommandInput,
  ...args: any
): Promise<ListPolicyGenerationsCommandOutput> => {
  // @ts-ignore
  return await client.listPolicyGenerations(input, ...args);
};
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
    if (config.client instanceof AccessAnalyzer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AccessAnalyzerClient) {
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
