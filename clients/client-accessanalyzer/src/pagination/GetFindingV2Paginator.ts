// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AccessAnalyzerClient } from "../AccessAnalyzerClient";
import {
  GetFindingV2Command,
  GetFindingV2CommandInput,
  GetFindingV2CommandOutput,
} from "../commands/GetFindingV2Command";
import { AccessAnalyzerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AccessAnalyzerClient,
  input: GetFindingV2CommandInput,
  ...args: any
): Promise<GetFindingV2CommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFindingV2Command(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetFindingV2(
  config: AccessAnalyzerPaginationConfiguration,
  input: GetFindingV2CommandInput,
  ...additionalArguments: any
): Paginator<GetFindingV2CommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetFindingV2CommandOutput;
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
