// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListHITsCommand, ListHITsCommandInput, ListHITsCommandOutput } from "../commands/ListHITsCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListHITsCommandInput,
  ...args: any
): Promise<ListHITsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHITsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListHITs(
  config: MTurkPaginationConfiguration,
  input: ListHITsCommandInput,
  ...additionalArguments: any
): Paginator<ListHITsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHITsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
