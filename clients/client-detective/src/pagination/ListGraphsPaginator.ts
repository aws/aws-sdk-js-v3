// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DetectiveClient,
  input: ListGraphsCommandInput,
  ...args: any
): Promise<ListGraphsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGraphsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListGraphs(
  config: DetectivePaginationConfiguration,
  input: ListGraphsCommandInput,
  ...additionalArguments: any
): Paginator<ListGraphsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGraphsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DetectiveClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Detective | DetectiveClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
