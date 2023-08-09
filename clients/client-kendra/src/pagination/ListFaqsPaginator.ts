// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListFaqsCommand, ListFaqsCommandInput, ListFaqsCommandOutput } from "../commands/ListFaqsCommand";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListFaqsCommandInput,
  ...args: any
): Promise<ListFaqsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFaqsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFaqs(
  config: KendraPaginationConfiguration,
  input: ListFaqsCommandInput,
  ...additionalArguments: any
): Paginator<ListFaqsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFaqsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
