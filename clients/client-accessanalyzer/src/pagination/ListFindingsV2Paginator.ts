// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  ListFindingsV2Command,
  ListFindingsV2CommandInput,
  ListFindingsV2CommandOutput,
} from "../commands/ListFindingsV2Command";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: ListFindingsV2CommandInput,
  ...args: any
): Promise<ListFindingsV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFindingsV2Command(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFindingsV2(
  config: AccessAnalyzerPaginationConfiguration,
  input: ListFindingsV2CommandInput,
  ...additionalArguments: any
): Paginator<ListFindingsV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFindingsV2CommandOutput;
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
