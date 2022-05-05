// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "../commands/ListChangeSetsCommand";
import { MarketplaceCatalog } from "../MarketplaceCatalog";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MarketplaceCatalogClient,
  input: ListChangeSetsCommandInput,
  ...args: any
): Promise<ListChangeSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChangeSetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MarketplaceCatalog,
  input: ListChangeSetsCommandInput,
  ...args: any
): Promise<ListChangeSetsCommandOutput> => {
  // @ts-ignore
  return await client.listChangeSets(input, ...args);
};
export async function* paginateListChangeSets(
  config: MarketplaceCatalogPaginationConfiguration,
  input: ListChangeSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListChangeSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListChangeSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MarketplaceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MarketplaceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MarketplaceCatalog | MarketplaceCatalogClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
