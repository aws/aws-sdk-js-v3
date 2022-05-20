// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServiceActionsCommand,
  ListServiceActionsCommandInput,
  ListServiceActionsCommandOutput,
} from "../commands/ListServiceActionsCommand";
import { ServiceCatalog } from "../ServiceCatalog";
import { ServiceCatalogClient } from "../ServiceCatalogClient";
import { ServiceCatalogPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceCatalogClient,
  input: ListServiceActionsCommandInput,
  ...args: any
): Promise<ListServiceActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServiceActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ServiceCatalog,
  input: ListServiceActionsCommandInput,
  ...args: any
): Promise<ListServiceActionsCommandOutput> => {
  // @ts-ignore
  return await client.listServiceActions(input, ...args);
};
export async function* paginateListServiceActions(
  config: ServiceCatalogPaginationConfiguration,
  input: ListServiceActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListServiceActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServiceActionsCommandOutput;
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
    const prevToken = token;
    token = page.NextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
