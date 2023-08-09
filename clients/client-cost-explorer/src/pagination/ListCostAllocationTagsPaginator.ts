// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCostAllocationTagsCommand,
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
} from "../commands/ListCostAllocationTagsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CostExplorerClient,
  input: ListCostAllocationTagsCommandInput,
  ...args: any
): Promise<ListCostAllocationTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCostAllocationTagsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCostAllocationTags(
  config: CostExplorerPaginationConfiguration,
  input: ListCostAllocationTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListCostAllocationTagsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCostAllocationTagsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CostExplorerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CostExplorer | CostExplorerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
