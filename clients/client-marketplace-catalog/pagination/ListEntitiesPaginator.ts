import { MarketplaceCatalog } from "../MarketplaceCatalog";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "../commands/ListEntitiesCommand";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MarketplaceCatalogClient,
  input: ListEntitiesCommandInput,
  ...args: any
): Promise<ListEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitiesCommand(input), ...args);
};
const makePagedRequest = async (
  client: MarketplaceCatalog,
  input: ListEntitiesCommandInput,
  ...args: any
): Promise<ListEntitiesCommandOutput> => {
  // @ts-ignore
  return await client.listEntities(input, ...args);
};
export async function* listEntitiesPaginate(
  config: MarketplaceCatalogPaginationConfiguration,
  input: ListEntitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitiesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntitiesCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
