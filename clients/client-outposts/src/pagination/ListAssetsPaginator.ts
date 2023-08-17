// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OutpostsClient,
  input: ListAssetsCommandInput,
  ...args: any
): Promise<ListAssetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssets(
  config: OutpostsPaginationConfiguration,
  input: ListAssetsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OutpostsClient) {
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
