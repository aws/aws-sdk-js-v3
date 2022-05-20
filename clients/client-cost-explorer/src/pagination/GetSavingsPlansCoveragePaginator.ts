// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "../commands/GetSavingsPlansCoverageCommand";
import { CostExplorer } from "../CostExplorer";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CostExplorerClient,
  input: GetSavingsPlansCoverageCommandInput,
  ...args: any
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSavingsPlansCoverageCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CostExplorer,
  input: GetSavingsPlansCoverageCommandInput,
  ...args: any
): Promise<GetSavingsPlansCoverageCommandOutput> => {
  // @ts-ignore
  return await client.getSavingsPlansCoverage(input, ...args);
};
export async function* paginateGetSavingsPlansCoverage(
  config: CostExplorerPaginationConfiguration,
  input: GetSavingsPlansCoverageCommandInput,
  ...additionalArguments: any
): Paginator<GetSavingsPlansCoverageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSavingsPlansCoverageCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
