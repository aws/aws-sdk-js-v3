// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCatalogItemsCommand,
  ListCatalogItemsCommandInput,
  ListCatalogItemsCommandOutput,
} from "../commands/ListCatalogItemsCommand";
import { Outposts } from "../Outposts";
import { OutpostsClient } from "../OutpostsClient";
import { OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OutpostsClient,
  input: ListCatalogItemsCommandInput,
  ...args: any
): Promise<ListCatalogItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCatalogItemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Outposts,
  input: ListCatalogItemsCommandInput,
  ...args: any
): Promise<ListCatalogItemsCommandOutput> => {
  // @ts-ignore
  return await client.listCatalogItems(input, ...args);
};
export async function* paginateListCatalogItems(
  config: OutpostsPaginationConfiguration,
  input: ListCatalogItemsCommandInput,
  ...additionalArguments: any
): Paginator<ListCatalogItemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCatalogItemsCommandOutput;
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
