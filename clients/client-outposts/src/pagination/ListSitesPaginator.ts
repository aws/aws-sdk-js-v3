// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import { Outposts } from "../Outposts";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OutpostsClient,
  input: ListSitesCommandInput,
  ...args: any
): Promise<ListSitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSitesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Outposts,
  input: ListSitesCommandInput,
  ...args: any
): Promise<ListSitesCommandOutput> => {
  // @ts-ignore
  return await client.listSites(input, ...args);
};
export async function* paginateListSites(
  config: OutpostsPaginationConfiguration,
  input: ListSitesCommandInput,
  ...additionalArguments: any
): Paginator<ListSitesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSitesCommandOutput;
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
