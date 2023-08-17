// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "../commands/ListEntitiesCommand";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MarketplaceCatalogClient,
  input: ListEntitiesCommandInput,
  ...args: any
): Promise<ListEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEntities(
  config: MarketplaceCatalogPaginationConfiguration,
  input: ListEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntitiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MarketplaceCatalogClient) {
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
