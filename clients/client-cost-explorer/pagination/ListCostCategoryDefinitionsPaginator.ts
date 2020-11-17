import { CostExplorer } from "../CostExplorer";
import { CostExplorerClient } from "../CostExplorerClient";
import {
  ListCostCategoryDefinitionsCommand,
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "../commands/ListCostCategoryDefinitionsCommand";
import { CostExplorerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CostExplorerClient,
  input: ListCostCategoryDefinitionsCommandInput,
  ...args: any
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCostCategoryDefinitionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CostExplorer,
  input: ListCostCategoryDefinitionsCommandInput,
  ...args: any
): Promise<ListCostCategoryDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listCostCategoryDefinitions(input, ...args);
};
export async function* paginateListCostCategoryDefinitions(
  config: CostExplorerPaginationConfiguration,
  input: ListCostCategoryDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCostCategoryDefinitionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCostCategoryDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CostExplorer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CostExplorerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostExplorer | CostExplorerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
