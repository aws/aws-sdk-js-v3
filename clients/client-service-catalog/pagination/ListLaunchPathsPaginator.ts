import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  ListLaunchPathsCommand,
  ListLaunchPathsCommandInput,
  ListLaunchPathsCommandOutput,
} from "../commands/ListLaunchPathsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListLaunchPathsCommandInput,
  ...args: any
): Promise<ListLaunchPathsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLaunchPathsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListLaunchPathsCommandInput,
  ...args: any
): Promise<ListLaunchPathsCommandOutput> => {
  // @ts-ignore
  return await client.listLaunchPaths(input, ...args);
};
export async function* listLaunchPathsPaginate(
  config: ServiceCatalogPaginationConfiguration,
  input: ListLaunchPathsCommandInput,
  ...additionalArguments: any
): Paginator<ListLaunchPathsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListLaunchPathsCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof ServiceCatalog) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ServiceCatalogClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceCatalog | ServiceCatalogClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
