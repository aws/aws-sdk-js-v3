// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListOrdersCommand, ListOrdersCommandInput, ListOrdersCommandOutput } from "../commands/ListOrdersCommand";
import { Outposts } from "../Outposts";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OutpostsClient,
  input: ListOrdersCommandInput,
  ...args: any
): Promise<ListOrdersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOrdersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Outposts,
  input: ListOrdersCommandInput,
  ...args: any
): Promise<ListOrdersCommandOutput> => {
  // @ts-ignore
  return await client.listOrders(input, ...args);
};
export async function* paginateListOrders(
  config: OutpostsPaginationConfiguration,
  input: ListOrdersCommandInput,
  ...additionalArguments: any
): Paginator<ListOrdersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOrdersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Outposts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OutpostsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Outposts | OutpostsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
