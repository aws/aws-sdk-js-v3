// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListGraphsCommand, ListGraphsCommandInput, ListGraphsCommandOutput } from "../commands/ListGraphsCommand";
import { Detective } from "../Detective";
import { DetectiveClient } from "../DetectiveClient";
import { DetectivePaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Detective,
  input: ListGraphsCommandInput,
  ...args: any
): Promise<ListGraphsCommandOutput> => {
  // @ts-ignore
  return await client.listGraphs(input, ...args);
};
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
    if (config.client instanceof Detective) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DetectiveClient) {
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
