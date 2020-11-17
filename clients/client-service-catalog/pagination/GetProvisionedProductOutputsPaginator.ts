import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import {
  GetProvisionedProductOutputsCommand,
  GetProvisionedProductOutputsCommandInput,
  GetProvisionedProductOutputsCommandOutput,
} from "../commands/GetProvisionedProductOutputsCommand";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: GetProvisionedProductOutputsCommandInput,
  ...args: any
): Promise<GetProvisionedProductOutputsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetProvisionedProductOutputsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ServiceCatalog,
  input: GetProvisionedProductOutputsCommandInput,
  ...args: any
): Promise<GetProvisionedProductOutputsCommandOutput> => {
  // @ts-ignore
  return await client.getProvisionedProductOutputs(input, ...args);
};
export async function* paginateGetProvisionedProductOutputs(
  config: ServiceCatalogPaginationConfiguration,
  input: GetProvisionedProductOutputsCommandInput,
  ...additionalArguments: any
): Paginator<GetProvisionedProductOutputsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetProvisionedProductOutputsCommandOutput;
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
    token = page.NextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
