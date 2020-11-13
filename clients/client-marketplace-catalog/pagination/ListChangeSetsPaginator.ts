import { MarketplaceCatalog } from "../MarketplaceCatalog";
import { MarketplaceCatalogClient } from "../MarketplaceCatalogClient";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "../commands/ListChangeSetsCommand";
import { MarketplaceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MarketplaceCatalogClient,
  input: ListChangeSetsCommandInput,
  ...args: any
): Promise<ListChangeSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListChangeSetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MarketplaceCatalog,
  input: ListChangeSetsCommandInput,
  ...args: any
): Promise<ListChangeSetsCommandOutput> => {
  // @ts-ignore
  return await client.listChangeSets(input, ...args);
};
export async function* listChangeSetsPaginate(
  config: MarketplaceCatalogPaginationConfiguration,
  input: ListChangeSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListChangeSetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
