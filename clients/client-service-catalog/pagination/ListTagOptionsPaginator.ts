import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListTagOptionsCommand,
  ListTagOptionsCommandInput,
  ListTagOptionsCommandOutput,
} from "../commands/ListTagOptionsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListTagOptionsCommandInput,
  ...args: any
): Promise<ListTagOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagOptionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListTagOptionsCommandInput,
  ...args: any
): Promise<ListTagOptionsCommandOutput> => {
  // @ts-ignore
  return await client.listTagOptions(input, ...args);
};
export async function* listTagOptionsPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListTagOptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTagOptionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTagOptionsCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    token = page.PageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
